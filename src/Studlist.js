import React from 'react';
import './studlist.css'
function Studlist() {
  return (
    <>
    <h1 style={{marginLeft:"650px",fontSize:"30px"}}>STUDENTS LIST</h1>
      <div className="c">
      <table className="ui very basic table">
      <thead>
      <th>S.NO</th>
      <th>STUDENT NAME</th>
      <th>COURSE</th>
      </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>KOLLURI.DEVI SREE</td>
            <td>10Th</td>
          </tr>
          <tr>
            <td>2</td>
            <td>NAKKA.PALLAVI</td>
            <td>12Th</td>
          </tr>
          <tr>
            <td>3</td>
            <td>KOTA SUSHMAA</td>
            <td>9Th</td>
          </tr>
          <tr>
            <td>4</td>
            <td>MADDIPATI DIVYA</td>
            <td>12Th</td>
          </tr>
          <tr>
            <td>5</td>
            <td>PINDI NAGA SREE</td>
            <td>BTech</td>
          </tr>
          <tr>
            <td>6</td>
            <td>ADDALA POOJITHA</td>
            <td>12Th</td>
          </tr>
          <tr>
            <td>7</td>
            <td>ACHUTHA TEJA</td>
            <td>BTech</td>
          </tr>
          <tr>
            <td>8</td>
            <td>TANNIRU SHARMILA</td>
            <td>10Th</td>
          </tr>
          <tr>
            <td>9</td>
            <td>SEELAM RUCHITHA</td>
            <td>12Th</td>
          </tr>
          <tr>
            <td>10</td>
            <td>PETTELA HARSHITHA</td>
            <td>BTech</td>
          </tr>
          <tr>
            <td>11</td>
            <td>PINDI NAGA SREE</td>
            <td>BTech</td>
          </tr>
          <tr>
            <td>12</td>
            <td>ADDALA POOJITHA</td>
            <td>12Th</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  )
}
export default Studlist;