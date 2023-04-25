import PropTypes from 'prop-types';

const CourseListRow = (props) =>{
    const {isHeader,textFirstCell,textSecondCell} = props
    let tr;
    if(isHeader){
        textSecondCell=== null ? (tr= <th colSpan='2'>{textFirstCell}</th> ): (tr=<>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        </>)
    }
    else{
        tr = <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
        </>
    }
    return <tr>{tr}</tr>

}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
  };
  
  CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
  };
  
export default CourseListRow
