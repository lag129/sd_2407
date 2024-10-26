function Meishiname() {
  const nameInput = document.getElementById('nameInput');
  const shozouInput = document.getElementById('shozouInput');
  const TagInput = document.getElementById('TagInput');

  const name = nameInput.value;
  const shozou = shozouInput.value;
	const Tag = TagInput.value;
  return(name,shozou,Tag);
}