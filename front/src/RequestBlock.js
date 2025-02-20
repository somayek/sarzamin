import React from "react";
import QuestionSelector from "./QuestionSelector";

const RequestBlock = ({
  request,
  index,
  handleInputChange,
  handleAnswerChange,
  handleSubmit,
  currentAnswers,
  allQuestions,
  answers,
  uniqueApplications,
  ageRanges,
}) => {
  return (
    <div className="request-block">
      <h3>درخواست {index + 1}</h3>
      <div className="input-row">
        <input
          type="text"
          placeholder="نام"
          value={request.name}
          onChange={(e) => handleInputChange(index, "name", e.target.value)}
        />
        <select
          value={request.sex}
          onChange={(e) => handleInputChange(index, "sex", e.target.value)}
        >
          <option value="">انتخاب جنسیت</option>
          <option value="male">مرد</option>
          <option value="female">زن</option>
        </select>
      </div>

      <div className="input-row">
        <select
          value={request.application}
          onChange={(e) =>
            handleInputChange(index, "application", e.target.value)
          }
        >
          <option value="">انتخاب برنامه</option>
          {uniqueApplications.map((app, i) => (
            <option key={i} value={app.value}>
              {app.text}
            </option>
          ))}
        </select>
        <select
          value={request.age}
          onChange={(e) => handleInputChange(index, "age", e.target.value)}
        >
          <option value="">سن</option>
          {ageRanges.map((app, i) => (
            <option key={i} value={app.value}>
              {app.text}
            </option>
          ))}
        </select>
      </div>

      {request.answeredQuestions.length > 0 && (
        <div className="answered-questions">
          <h3>Answered Questions</h3>
          <ul>
            {request.answeredQuestions.map((item, idx) => (
              <li key={idx}>{`${item.question}: ${item.answer}`}</li>
            ))}
          </ul>
        </div>
      )}

      {request.currentQuestion && (
        <QuestionSelector
          request={request}
          index={index}
          handleAnswerChange={handleAnswerChange}
          currentAnswers={currentAnswers}
          allQuestions={allQuestions}
          answers={answers}
        />
      )}

      {request.currentQuestion === null && (
        <button onClick={() => handleSubmit(index)}>دریافت لیست مدارک</button>
      )}
      {request.documents && request.documents.length > 0 && (
        <div className="documents">
          <h3>Documents</h3>
          <ul className="document-list">
            {request.documents.map(
              (doc, i) =>
                doc.text && (
                  <li key={i} className="document-item">
                    <span className="document-text">{doc.text}</span>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
      {request.charges && request.charges.length > 0 && (
        <div className="documents">
          <h3>Charges</h3>
          <ul className="document-list">
            {request.charges.map(
              (charge, i) =>
                charge && (
                  <li key={i} className="document-item">
                    <span className="document-text">{charge}</span>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RequestBlock;
