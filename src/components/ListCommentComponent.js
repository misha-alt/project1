import React, { useEffect, useState } from 'react';
import { listComment, deleteComment } from '../service/ProductService';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2 } from 'lucide-react';

const ListCommentComponent = () => {
  const [comments, setComments] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllСomments();
  }, []);

  function getAllСomments() {
    listComment()
      .then((response) => setComments(response.data))
      .catch((error) => console.error(error));
  }

  function addComment() {
    navigator('/sendComment');
  }


  function removeComment(id) {
    deleteComment(id).then((responce)=>{
        getAllСomments();
    }).catch(error=>{
        console.log(error);

    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
            <button
              onClick={addComment}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Comment
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Comment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comments.map((comment) => (
                  <tr key={comment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {comment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {comment.loginOfCreator}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {comment.comment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(comment.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        onClick={()=>removeComment(comment.id)}
                        className="text-red-600 hover:text-red-900 focus:outline-none"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCommentComponent;