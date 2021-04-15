$(function () {
  //customize for support category
  $.widget("custom.cate_complete", $.ui.autocomplete, {
    _create: function () {
      this._super();
      this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)"); //don't treat category as menu item
    },

    _renderProduct: function (ul, item) {
      return $("<li>")
        .append(
          "<div>" +
            "<h1>" +
            item.title +
            "</h1>" +
            "<h2>" +
            item.brand +
            "</h2>" +
            "<strong>" +
            item.price +
            "</strong>" +
            "</div>"
        )
        .append(
          $("<img />", {
            id: "Myid",
            src: item.image,
            alt: "MyAlt",
          })
        )
        .appendTo(ul);
    },
    _renderMenu: function (ul, items) {
      var that = this;
      var checkbox =
        " <div class='custom-control custom-switch'>  <input checked type='checkbox' id='customSwitch' class='custom-control-input'/>  </div>";
      var suggestion_li = "<li class='ui-autocomplete-category'>" + "suggestions" + checkbox + "</li>";
      var collection_li = "<li class='ui-autocomplete-category'>" + "collections" + checkbox + "</li>";
      var product_li = "<li class='ui-autocomplete-category'>" + "products" + checkbox + "</li>";

      // Suggestions block
      ul.append(suggestion_li);
      $.each(items, function (index, item) {
        var li;
        if (item.category === "suggestions") {
          li = that._renderItemData(ul, item);
          li.attr("aria-label", "suggestions" + " : " + item.label);
          li.attr("class", "suggestion-item");
        }
      });

      // Collections block
      ul.append(collection_li);
      $.each(items, function (index, item) {
        var li;
        if (item.category === "collections") {
          li = that._renderItemData(ul, item);
          li.attr("aria-label", "collections" + " : " + item.label);
          li.attr("class", "collection-item");
        }
      });

      // Products block
      ul.append(product_li);
      $.each(items, function (index, item) {
        var li;
        if (item.category === "products") {
          li = that._renderProduct(ul, item);
          li.attr("aria-label", "products" + " : " + item.label);
          li.attr("class", "product-item");
        }
      });
    },
  });

  $("#custom-auto-complete").cate_complete({
    delay: 0,
    source: async function (request, response) {
      const data = await handleSearch(request.term);
      const { suggestions, collections, products } = data;
      response([...suggestions, ...collections, ...products]);
    },
  });
});
