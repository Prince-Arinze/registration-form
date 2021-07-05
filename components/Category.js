import { Row, Col } from 'antd';
import styles from '../styles/Home.module.css';

const Category = ({category, updateCategory}) => {

    return(
        <div className={styles.category_container}>
            <h2>Create account</h2>
            <span>Let’s get started</span>
            <Row className={styles.category_section}>
                <Col className="gutter-row" span={8} onClick={() => updateCategory(1)}>
                    <div className={category === 1 ? `${styles.grid}  ${styles.active_grid}` : `${styles.grid}`}>Student</div>
                </Col>
                <Col className="gutter-row" span={8} onClick={() => updateCategory(2)}>
                    <div className={category === 2 ? `${styles.grid}  ${styles.active_grid}  ${styles.single_grid}` : `${styles.grid}  ${styles.single_grid}`}>Parent</div>
                </Col>
                <Col className="gutter-row" span={8} onClick={() => updateCategory(3)}>
                    <div className={category === 3 ? `${styles.grid}  ${styles.active_grid}  ${styles.single_grid2}` : `${styles.grid}  ${styles.single_grid2}`}>Counsellor</div>
                </Col>
                
            </Row>
        </div>
    )
}
export default Category;