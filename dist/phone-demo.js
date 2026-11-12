// Opening this dedicated page requests the phone-sized prototype.
const frame = document.createElement('iframe');
frame.title = 'Block Party mobile prototype — simulated data';
frame.src = 'https://mmansukhani212.github.io/block-party/';
frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');
frame.referrerPolicy = 'strict-origin-when-cross-origin';
document.getElementById('phone-screen').replaceChildren(frame);
