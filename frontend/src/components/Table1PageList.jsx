import React, {useEffect, useState} from "react";
import {Pagination} from "react-bootstrap";
import {Link} from "react-router-dom";

function Table1PageList({firstPage, currentPage, lastPage, members}) {
    const [pageNumList, setPageNumList] = useState([]);

    useEffect(() => {
        let item = [];
        for (let i = firstPage; i <= lastPage; ++i) {
            item.push(i);
        }
        setPageNumList(item);
    }, [firstPage, lastPage]);

    return (
        <div>
            {
                firstPage == lastPage ?
                    <Pagination>
                        <Pagination.Prev/>
                        <Pagination.Item active>{currentPage}
                        </Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Next/>
                    </Pagination> :

                    <Pagination>
                        {
                            currentPage == firstPage ? <Pagination.Prev/> :
                                <Link to={`/admin?pageNum=${currentPage - 1}`}>
                                    <Pagination.Prev/>
                                </Link>
                        }
                        {
                            pageNumList.map(item => {
                                return <Pagination.Item>
                                    <Link to={`/admin?pageNum=${item}`}>
                                        <div
                                            className={`${currentPage}` == `${item}` ? `${item} active` : `${item}`}>{item}</div>
                                    </Link>

                                </Pagination.Item>
                            })
                        }
                        {
                            currentPage == lastPage ? <Pagination.Next/> :
                                <Link to={`admin?pageNum=${currentPage + 1}`}>
                                    <Pagination.Next/>
                                </Link>
                        }
                    </Pagination>
            }
        </div>
    )
}

export default Table1PageList;