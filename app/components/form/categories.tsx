import React, { useState } from 'react'
import styles from './categories.module.css'

const CreateCategorie = () => {
  
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [catSlug, setCatSlug] = useState("");


  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({
        title,
        color,
        slug: slugify(title),
      }),
    });

    if (res.status === 200) {
     setColor("") 
     setTitle("")
    }
  };
  return (
   <div className={styles.colorForm}>
    <div className={styles.formGroup}>
      <label htmlFor="titulo">Título:</label>
      <input
        type="text"
        id="titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    <div className={styles.formGroup}>
      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>

    <button onClick={handleSubmit}>Guardar</button>
  </div> 
  )
}

export default CreateCategorie