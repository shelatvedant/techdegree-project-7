/* variables */

const video = document.getElementById('video');
const transcriptDiv = document.querySelector('.transcript');
const spanText = document.querySelectorAll('.transcript span');

/* As video plays, the transcript highlights*/

video.addEventListener('timeupdate', () => {
  for(let i = 0; i < spanText.length; i += 1){
    let videoTime = video.getCurrentTime();
    let startVideoTime = spanText[i].getAttribute('data-start');
    let endVideoTime = spanText[i].getAttribute('data-end');

    if(videoTime >= startVideoTime && videoTime <= endVideoTime){
      spanText[i].className = 'highlight';
    }else {
      spanText[i].className = '';
    }
  }
});

/* On clicking the transcript, video time changes*/

transcriptDiv.addEventListener('click', (e) => {
  const transcriptTime = e.target.getAttribute('data-start');
  if(transcriptTime){
    video.setCurrentTime(transcriptTime);
  }
});
