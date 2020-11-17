## Label 태그 관련 내용

`<label>` 태그의 속성으로 `for`를 설정할 수 있다. `for`는 참조할 태그의 `id` 값을 넣으면 된다.<br>

<br>

```html
<input type="checkbox" id="user-agreement">
<label for="user-agreement">동의 하십니까?</label>
```

<br>

`<label>` 태그의 후손으로 넣을 경우 `for`을 쓰지 않아도 된다.

<br>

```html
<label><input type="checkbox"> 동의 하십니까?</label>
```