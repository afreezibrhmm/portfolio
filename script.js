// Afreez Ibrahim Portfolio Scripts
document.addEventListener('DOMContentLoaded', () => {
  console.log('%cHey there, curious developer! Looking at the console? Stalk at your own risk :)', 'color: #000; font-size: 16px; font-weight: bold; background: #eee; padding: 6px 12px; border-radius: 4px;');

  // Say Hello Email Interaction
  const sayHelloBtn = document.getElementById('sayHelloBtn');
  const toastMsg = document.getElementById('toastMsg');
  const emailAddress = 'afreezibrahim@gmail.com';

  if (sayHelloBtn && toastMsg) {
    sayHelloBtn.addEventListener('click', (e) => {
      // Copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(emailAddress).then(() => {
          showToast('Email address copied to clipboard!');
        }).catch(() => {
          // Fallback
        });
      }
    });
  }

  function showToast(text) {
    if (!toastMsg) return;
    toastMsg.textContent = text;
    toastMsg.classList.add('show');
    setTimeout(() => {
      toastMsg.classList.remove('show');
    }, 3000);
  }

  // Hero Image Interactive Toggle (Sketch <-> Original Photo)
  const heroImg = document.getElementById('heroImg');
  if (heroImg) {
    let isSketch = true;
    heroImg.style.cursor = 'pointer';
    heroImg.setAttribute('title', 'Click to toggle between sketch and original photo');

    //heroImg.addEventListener('click', () => {
      //heroImg.style.opacity = '0';
      //heroImg.style.transform = 'scale(0.96)';
      
      //setTimeout(() => {
        //if (isSketch) {
          //heroImg.src = 'assets/afreez_original.jpg';
          //heroImg.style.borderRadius = '16px';
          //heroImg.style.objectFit = 'cover';
          //showToast('Switched to original photo');
        //} else {
          //heroImg.src = 'assets/afreez_sketch.png';
          //heroImg.style.borderRadius = '0';
          //heroImg.style.objectFit = 'contain';
          //showToast('Switched to sketch portrait');
        //}
        //isSketch = !isSketch;
        //heroImg.style.opacity = '1';
        //heroImg.style.transform = 'scale(1)';
      //}, 200);
    //});
  //}

  // Smooth Scrolling for Internal Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
