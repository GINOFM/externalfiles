async function opendialog()
{
const {value: file} = await Swal.fire({
  title: 'Select image',
  input: 'file',
  inputAttributes: {
    'accept': 'image/*',
    'aria-label': 'Upload your profile picture'
  }
})

if (file) {
  const reader = new FileReader
  reader.onload = (e) => {
    Swal.fire({
      title: 'Your uploaded picture',
      imageUrl: e.target.result,
      imageAlt: 'The uploaded picture'
    })
  }

var urlv=window.URL.createObjectURL(e.target.result)
	gml_Script_gmcallback_test("","",urlv)
}
}