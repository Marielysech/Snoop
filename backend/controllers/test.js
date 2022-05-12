const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    formData.get('name');
    formData.get('city');
    formData.get('gender');
    formData.get('blood');
    formData.append('_id', student._id)
    formData.append('image', image);
     
    
    let config = {
        method: "put",
        url: "http://localhost:5000/api/students/edit",
        headers: {
          "content-type": "application/json",
          "content-type": "multipart/form-data"
        },
        data: formData,
      };
      
      axios(config)
      .then((res) => {
        getPaginatedData()
        })
        .catch((error) => {
          console.log( error )
        })
      alert("Edited")
      handleClose()
    }