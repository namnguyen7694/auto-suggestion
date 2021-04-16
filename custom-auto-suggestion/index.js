function autoSuggestion(categories = ["suggestions", "collections", "products"]) {
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

    _handleCheckbox: function (target, itemClassName) {
      $(target).change(function () {
        if (!this.checked) {
          $(itemClassName).hide();
        } else {
          $(itemClassName).show();
        }
      });
    },

    _renderMenu: function (ul, items) {
      var that = this;
      for (var category of categories) {
        var container = $("<div> </div", {
          class: "custom-control custom-switch",
        });
        $("<input />", { type: "checkbox", id: `${category}-checkbox`, checked: true, value: category }).appendTo(
          container
        );
        var li = $("<li>", {
          text: category,
          class: "ui-autocomplete-category",
        });
        $(container).appendTo($(li));
        ul.append(li);

        $.each(items, function (index, item) {
          var li;
          if (item.category === category) {
            if (category === "products") {
              li = that._renderProduct(ul, item);
              li.attr("aria-label", category + " : " + item.value);
              li.attr("class", `${category}-item`);
            } else {
              li = that._renderItemData(ul, item);
              li.attr("aria-label", category + " : " + item.value);
              li.attr("class", `${category}-item`);
            }
          }
        });
        that._handleCheckbox(`#${category}-checkbox`, `.${category}-item`);
      }
    },
  });

  $("#custom-auto-complete").cate_complete({
    delay: 0,
    source: async function (request, response) {
      const data = await handleSearch(request.term);
      let resp = [];
      for (var category of categories) {
        resp.push(...data[category]);
      }
      response(resp);
    },
  });
}
