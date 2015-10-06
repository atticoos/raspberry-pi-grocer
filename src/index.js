process.stdin.on('data', function (data) {
  console.log('barcode scanned:', data.toString());
});
