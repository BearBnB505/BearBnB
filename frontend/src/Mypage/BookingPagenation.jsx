import styled from "styled-components";
import React from "react";
import axios from "axios";

function BookingPagenation({ total, limit, page, setPage}) {

  // Math.ceil => 올림처리. 주로 페이지네이션에서 전체 페이지 수 계산할 때 이용함.
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1} style={{marginRight:7}}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages} style={{marginLeft:7}}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #0d6efd;
  color: white;
  font-size: 1rem;
  &:hover {
    background: RGB(19, 83, 195);
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: RGB(145, 189, 253);
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: RGB(89, 155, 253);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default BookingPagenation;