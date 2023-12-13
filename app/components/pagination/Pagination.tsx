"use client";
import React from "react";
import { useRouter } from "next/navigation";

import styles from "./Pagination.module.css";

interface PaginationProps {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
}

const Pagination = ({ currentPage, hasPrev, hasNext }: PaginationProps) => {
    const router = useRouter();

    return (
        <>
            {
                !hasPrev && !hasNext ? null : (
                    <div className={styles.container}>
                        <button
                            className={styles.button}
                            disabled={!hasPrev}
                            onClick={() => router.push(`?page=${currentPage - 1}`)}
                        >
                            Previous
                        </button>
                        <button
                            disabled={!hasNext}
                            className={styles.button}
                            onClick={() => router.push(`?page=${currentPage + 1}`)}
                        >
                            Next
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default Pagination;
