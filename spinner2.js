const lines = ['|','/','-','\\','|','/','-','\\','|'];
delay = 200;
for (let i = 0 ; i < lines.length ; i++) {
  setTimeout(() => {
    if (i === lines.length - 1) {
      process.stdout.write('\r' + lines[i] + "\n");
    } else {
      process.stdout.write('\r' + lines[i]);
    }
  }, delay)
    delay += 200;
} 