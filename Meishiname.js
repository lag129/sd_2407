function Meishiname() {
  const nameInput = document.getElementById('nameInput');
  const shozokuInput = document.getElementById('shozokuInput');
  const TagsInput = document.getElementById('TagsInput');

  const name = nameInput.value;
  const shozoku = shozokuInput.value;
	const Tags = TagsInput.value;
  return(name,shozoku,Tags);
}