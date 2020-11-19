## Select, Optgroup, Option, Datalist 태그에 관한 내용

#### `<select>`
옵션을 선택하는 메뉴

속성 | 의미 
-----|------
`autocomplete` | 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부
`disabled` | 선택 메뉴를 비활성화
`form` | `<form>` 후손으로 `<select>`가 없을 때 `<form>`과 연결하고자 할 때 사용한다.
`multiple` | 다중 선택 여부
`name` | 선택 메뉴의 이름
`size` | 한 번에 볼 수 있는 행의 개수

<br>

#### `<option>`
선택 메뉴(`<select>`)나 자동완성(`<datalist>`)에서 사용될 옵션.

속성 | 의미
-----|-----
`disabled` | 옵션을 비활성화
`label` | 표시될 옵션의 제목
`selected` | 옵션이 선택되었음을 표시
`value` | 양식으로 제출될 값

<br>

#### `<optgroup>`
`<option>`을 그룹화

속성 | 의미
-----|-----
`label` | (필수)옵션 그룹의 이름
`disabled` | 옵션 그룹을 비활성화

<br>

#### `<datalist>`
`<input>`에 미리 정의된 옵션을 지정하여 기능을 제공하는 데 사용. `<input>`의 `list`와 `<datalist>`의 `id` 값이 같아야한다.