function sendEventToAndroid() {
  if (window.AnalyticsWebInterface) {
    window.AnalyticsWebInterface.logEvent("purchase", JSON.stringify({
      content_type: "product",
      value: 123,
      currency: "USD",
      quantity: 2,
      items: [{
        item_id: "sample-item-id",
        item_variant: "232323"
      }],
      result:true,
      transaction_id: "1234567"
    }));
  } else {
    console.log("Android 接口未找到");
  }
}
