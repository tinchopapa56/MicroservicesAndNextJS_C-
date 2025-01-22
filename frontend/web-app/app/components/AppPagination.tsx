import React from 'react'
import { Pagination } from 'flowbite-react'

type TProps = {
    currentPage: number, 
    pageCount: number,
    onPageChange: (page: number) => void 
}

const AppPagination = ({ currentPage, pageCount, onPageChange }: TProps) => {
    return (
        <Pagination
            currentPage={currentPage}
            onPageChange={e => onPageChange(e)}
            totalPages={pageCount}
            layout="pagination"
            showIcons={true}
            className="text-blue-500 mb-5"
        />

    )
}

export default AppPagination