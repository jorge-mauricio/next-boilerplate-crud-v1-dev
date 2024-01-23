import React, { useEffect, useState } from "react";

const deepCompareEquals = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
}

// const ItemForm = ({ onSubmit, initialData = {} }) => {
const ItemForm = ({ onSubmit, initialData = { name: '', description: '' } }) => {
  const [formData, setFormData] = useState(initialData);

  // Update state if initialData changes, e.g., when editing a different item
  useEffect(() => {
    if (!deepCompareEquals(initialData, formData)) {
      setFormData(initialData);
    }
  }, [initialData, formData]);

  const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });

    // const { name, value } = event.target;
    // setFormData(prevFormData => ({
    //     ...prevFormData,
    //     [name]: value
    // }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
