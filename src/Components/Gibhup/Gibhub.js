import React from 'react';
import moment from 'moment';

const   testFiles = [
    {
      id: 1,
      name: 'src',
      type: 'folder',
      updated_at: "2016-06-11 21:24:00",
      latestCommit: {
        message: 'Initial commit'
      }
    },
    {
      id: 2,
      name: 'tests',
      type: 'folder',
      updated_at: "2018-07-11 21:24:00",
      latestCommit: {
        message: 'Initial commit'
      }
    },
    {
      id: 3,
      name: 'README',
      type: 'file',
      updated_at: "2017-07-18 21:24:00",
      latestCommit: {
        message: 'Added a readme'
      }
    },
  ];


  const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
      <span className="time">{timeString}</span>
    );
  }
    

  const Folder = () => (
    <span className="file-button">
      <i className="fa fa-folder folder-button" />
      </span>
  );
  
  const File = () => (
    <span className="file-button">
      <i className="fa fa-file file-button" />
      </span>
  );
  

function Gibhub({ file }) {
  return (

    <div>
    <table>
    <th>Location</th>
    <th>Description</th>
    <th>Message</th>
    <th>Date</th>

    <tr></tr>

    {testFiles.map( file =>
        <tr key={file.id}>
        <td> {file.type==='folder' ? <Folder /> : <File /> }</td>
        <td>{file.name}</td>
        <td>{file.latestCommit.message}</td>
        <td><Time time = {file.updated_at} /></td>
        </tr>
        
       ) }

   </table>
    </div>
);
}
export default Gibhub;

