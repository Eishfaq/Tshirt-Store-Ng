(function() {
    var app = angular.module('tshirtStore', ['ngRoute']);

    app.controller('tshirtController', function () {
        this.product = tshirts;
        this.productNo = {};
        //$scope.addtoCart = function (product) {
            
        //    product.productNo.push($scope.productNo);
            
        //};
    });

    app.controller('panelController', function() {
        this.tab = 1;
        this.selectedTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller('reviewController', function() {
        this.review = {};
        this.addReview = function(product) {
            product.review.push(this.review);
            this.review = {};
        };
    });

    //app.controller('addController', function() {
    //    this.products = {};
    //    this.addTocart = function(product) {
    //        product.push(this.products);
            
    //    };
    //});

    var tshirts = [
            {
                name: "Angry Bird",
                category: "T-Shirt",
                color: "Black",
                size: "XL",
                price: "150",
                productNo: "4050",
                description:"The size is available. So if u want different sizes we can provide you. " +
                    "So comment your demand so that we can provide you. Thank you. ",
                review: [
                    {
                        star: 5,
                        body: "its a nice one",
                        author:"alif@gmail.com"
                    }
                ]   
            },
            {
                name: "Bat Man",
                category: "T-Shirt",
                color: "White",
                size: "M",
                price: "150",
                description: "The size is available. So if u want different sizes we can provide you. " +
                    "So comment your demand so that we can provide you. Thank you. ",
                review: [
                    {
                        star: 4,
                        body: "I want this....",
                        author: "alias@gmail.com"
                    }
                ]
            },
            {
                name: "Iron Man",
                category: "T-Shirt",
                color: "Red",
                size: "S",
                price: "150",
                productNo: "4051",
                description:"The size is available. So if u want different sizes we can provide you. " +
                    "So comment your demand so that we can provide you. Thank you. ",
                review: [
                    {
                        star: 4,
                        body: "is the small size available???",
                        author: "nabil@gmail.com"
                    }
                ]
            },
            {
                name: "Super Man",
                category: "T-Shirt",
                color: "Blue",
                size: "L",
                price: "150",
                productNo: "4052",
                description: "The size is available. So if u want different sizes we can provide you. " +
                    "So comment your demand so that we can provide you. Thank you. ",
                review: [
                    {
                        star: 5,
                        body: "its a nice one",
                        author: "alif@gmail.com"
                    }
                ]
            },
            {
                name: "Avengers",
                category: "T-Shirt",
                color: "Black",
                size: "L",
                price: "150",
                productNo: "4053",
                description: "The size is available. So if u want different sizes we can provide you. " +
                    "So comment your demand so that we can provide you. Thank you. ",
                review: [
                    {
                        star: 5,
                        body: "its a nice one",
                        author: "alif@gmail.com"
                    }
                ]
            }
    ];
})();