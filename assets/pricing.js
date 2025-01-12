"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelector("#pricing-switch input");
    e && e.addEventListener("change", function() {
        var n;
        n = e.checked,
        document.querySelectorAll(".toggle-price-content").forEach(function(e) {
            e.innerHTML = n ? e.dataset.priceYearly : e.dataset.priceMonthly
        })
    })
}),
document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelector("#pricing-switch-second input");
    e && e.addEventListener("change", function() {
        e.checked ? document.querySelectorAll(".toggle-price-content-second").forEach(function(e) {
            e.innerHTML = e.dataset.priceYearly
        }) : document.querySelectorAll(".toggle-price-content-second").forEach(function(e) {
            e.innerHTML = e.dataset.priceMonthly
        })
    })
});
