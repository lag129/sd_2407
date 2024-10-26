function Meishiname() {
  let nameInput = document.getElementById('nameInput');
  let shozokuInput = document.getElementById('shozokuInput');
  let TagsInput = document.getElementById('TagsInput');

  let name = nameInput.value;
  let shozoku = shozokuInput.value;
	let Tags = TagsInput.value;
  return(name,shozoku,Tags);
}