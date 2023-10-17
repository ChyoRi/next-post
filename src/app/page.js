'use client';

import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const theader = [
  '#','이름', '성별', '생년월일', '이메일', '등록일'
];

export default function Home() {
  const router = useRouter();
  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    const { data } = await useAxios.get("/test");
    if (!data?.result) return console.error('에러');
    setUserList(data?.data);
  }

  useEffect(() =>  {
    getUserList();
  },[]);

  return ( 
    <main>
      <CreateButton onClick={() => router.push('/add')}>유저 정보 생성</CreateButton>
      <Table>
        <thead>
          <tr>
          {theader.map((item) => {
            return <th key={item}>{item}</th>
          })}
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            return (
              <tr key={userList.USR_SQ} onClick={() => router.push('/' + item.USR_SQ)}> 
                <td>{item.USR_SQ || '-' }</td>
                <td>{item.USR_NM || '-' }</td>
                <td>{item.USR_GD_NM || '-' }</td>
                <td>{item.USR_BTH || '-' }</td>
                <td>{item.USR_MAIL || '-' }</td>
                <td>{item.USR_CRT_DT || '-' }</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </main>
  );
}

export const CreateButton = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  background-color: navy;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody > tr:hover {
    background-color: #ddd;
    cursor: pointer;
  }

  th,td {
    height: 40px;
    border: 1px solid #aaa;
    text-align: center;
  }
`;
