const arg = process.argv.slice(2);

function timer (num) {
  let time = 0;
  for (let t of num) {
    time = Number(t);
    setTimeout(() => {
      if(time > 0 && typeof time === 'number'){
        process.stdout.write('\x07')
      }
    }, time*1000);
  }
};

timer(arg);