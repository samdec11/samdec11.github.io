const highlight = (letter) => {
  let lineSelectors;
  document.querySelectorAll('line').forEach((line) => {
    line.style.stroke = 'transparent';
  });
  switch (letter.toUpperCase()) {
    case 'S':
      lineSelectors = ['.top-line', '.diag-line', '.btm-line'];
      break;
    case 'E':
      lineSelectors = ['.top-line', '.left-line', '.mid-line', '.btm-line'];
      break;
    case 'A':
      lineSelectors = ['.left-line', '.mid-line', '.diag-line'];
      break;
    case 'N':
      lineSelectors = ['.left-line', '.diag-line', '.right-line'];
      break;
    default:
      lineSelectors = [];
  }
  lineSelectors.forEach((line) => {
    document.querySelector(line).style.stroke = '#000';
  });
};

const intro = () => {
  const overlay = document.querySelector('.overlay');

  if (screen.width < 770) {
    overlay.style.display = 'none';
    return;
  }
  setTimeout(() => {
    highlight('S');
    setTimeout(() => {
      highlight('E');
      setTimeout(() => {
        highlight('A');
        setTimeout(() => {
          highlight('N');
          setTimeout(() => {
            document.querySelectorAll('line').forEach((line) => {
              line.style.stroke = '#000';
            });
            setTimeout(() => {
              overlay.style.opacity = 0;
            }, 1000);
          }, 1500);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 2000);
};

document.addEventListener('DOMContentLoaded', intro);
