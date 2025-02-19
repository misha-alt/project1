import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { sendComment } from '../service/ProductService'
import { useNavigate } from 'react-router-dom';

const CommentComponent = () => {
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState({
    comment: '',
  });
  const navigate = useNavigate();

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      //console.log('Comment submitted:', comment);
      sendComment(comment) .then((response) => {
        console.log(response.data);
        navigate('/listofcomments'); // Redirect to login or another page upon successful registration
      })
      .catch((error) => {
        console.error(error);
      });
      // Clear the form after successful submission
      setComment('');
    } else {
      console.error('Comment validation failed');
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    if (comment.trim()) {
      errorsCopy.comment = '';
    } else {
      errorsCopy.comment = 'Comment cannot be empty';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a Comment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label 
                htmlFor="comment" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Comment
              </label>
              <textarea
                id="comment"
                rows={4}
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.comment ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.comment && (
                <p className="mt-1 text-sm text-red-600">{errors.comment}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;