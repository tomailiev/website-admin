import { Box, Button, Container, Grid } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import LoadingContext from "../context/loadingContext";
import * as initialValues from '../utils/initialValues';
import * as validationSchemas from '../utils/yup-schemas';
import AddEditForm from "./AddEditForm";

function AddItem({ location }) {
    const { isLoading } = useContext(LoadingContext);
    const [formType, setFormType] = useState('');
    const [formObjects, setFormObjects] = useState([]);
    useEffect(() => {
        setFormType(location.pathname.substring(5, location.pathname.length - 1))
    }, [location.pathname]);

    function handleAddItem(e) {
        setFormObjects(prev => prev.concat(<AddEditForm initialValues={initialValues[formType]} validationSchema={validationSchemas[formType]} type={formType} />));
    }

    return (
        <Container maxWidth="sm">
            {formObjects.map((x, i) => <div key={i}>{x}</div>)}
            <Box textAlign="center">
                <Button variant="contained" onClick={handleAddItem} disabled={isLoading} > Add new {formType}...</Button >
            </Box>
        </Container>
    )
}

export default AddItem