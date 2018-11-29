import React from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditPosts = () => {
  return (
    <Table>
      <thead>
        <tr>
          <td>Image</td>
          <td>Date</td>
          <td>Tags</td>
          <td />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="/images/thumb.jpg" alt="img" />
          </td>
          <td>Nov 3, 2018 -12:30 AM</td>
          <td>#nyc, #dpggie</td>
          <td>
            <a href="#">
              <FontAwesomeIcon icon="trash-alt" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <img src="/images/thumb.jpg" />
          </td>
          <td>Nov 3, 2018 -12:30 AM</td>
          <td>#nyc, #dpggie</td>
          <td>
            <a href="#">
              <FontAwesomeIcon icon="trash-alt" />
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default EditPosts;
