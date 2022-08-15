import React from 'react';
import PropTypes from 'prop-types';
// 如果人工收费fff
function List({ lists, users }) {
  console.log('ddd', lists);
  console.log('ggg', users);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{users.find((user) => user.id === project.personId)?.name || '未知'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

List.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      personId: PropTypes.number,
      organization: PropTypes.string,
      created: PropTypes.number,
    }),
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

export default List;
