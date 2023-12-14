'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import TableCategories from '../components/table-categories/Table';
import CreateCategorie from '../components/form/categories';

const CategoriesPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <>
      <CreateCategorie />
      <Suspense fallback={<h1>cargando</h1>}>
        <TableCategories />
      </Suspense>
    </>
  );
};

export default CategoriesPage;
