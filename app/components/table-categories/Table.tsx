import React from 'react'
import styles from "./Table.module.css"

import { getCategories } from '@/lib/data';
import { TrashIcon } from '@heroicons/react/20/solid';
import { DELETE } from '@/app/api/categories/route';

const TableCategories = async () => {
  const categories = await getCategories();

  // const handleDelete = async (categoryId) => {
  //   await DELETE(categoryId);
  // };

  return (
    <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>Title</th>
          <th className={styles.header}>Color</th>
          {/* <th className={styles.header}>Options</th> */}
        </tr>
      </thead>
      <tbody>
        {categories.map((item) => (
          <tr key={item.id}>
            <td className={styles.body}>{item.title}</td>
            <td className={styles.body}>{item.color}</td>
            {/* <td>
            <div className={styles.icon}>
            <TrashIcon scale={2} onClick={() => handleDelete(item.id)}/>
            </div>
              </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default TableCategories