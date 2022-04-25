import { Observable, AsyncSubject } from 'rxjs';

const subject = new AsyncSubject();

const subscriptionA = subject.subscribe((data) => {
  addItem('Subscriber A: ' + data);
});

subject.subscribe((data) => addItem('Subscriber B: ' + data));

subject.next(Math.random());
subject.next(Math.random());
subject.next('12');
subject.complete();

function addItem(val) {
  var node = document.createElement('li');
  node.classList.add('list-group-item');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
