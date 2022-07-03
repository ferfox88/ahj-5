export default function createPopover(event) {
  event.preventDefault();

  const popover = document.createElement('div');
  popover.classList.add('popover');

  popover.innerHTML = `
<h3 class="popover-header">${event.target.getAttribute('title')}</h3>
<p class="popover-body">${event.target.dataset.content}</p>`;

  event.target.offsetParent.appendChild(popover);
  popover.style.top = `${event.target.offsetTop - popover.offsetHeight}px`;
  popover.style.left = `${event.target.offsetLeft
    + event.target.offsetWidth / 2 - popover.offsetWidth / 2
  }px`;
}
