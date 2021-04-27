import paginationStyle from '../styles/Pagination.module.css';
import React, { ReactElement } from 'react';
import { pageSize } from '../config';
import Link from 'next/link';


interface Props {
    offersLength: number;
    pageNumber: number
}

const Pagination = ({ offersLength, pageNumber }: Props): ReactElement => {
    const pageLength = Math.ceil(offersLength / pageSize);
    const pageList = Array.from(Array(pageLength).keys());

    return (
        <div className={paginationStyle.wrapper}>
            {pageList.map((page) => (
                <div key={`page-${page+1}`} className={paginationStyle.link}>
                    <Link href={`/offers/page/${page + 1}`}>
                        <a className={page + 1 === Number(pageNumber) ? paginationStyle.active : ''}> {page + 1}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Pagination;
