import React from 'react';
import { Button } from '@twilio-paste/core/button';
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';


export default function DeleteButton(props) {

    const serviceObj = props.service

    const handleDelete = (serviceObj) => {
        if (props.severity === 'low') {
            props.toaster.push({
                message: `${serviceObj.friendlyName} was successfully deleted.`,
                variant: 'success',
                dismissAfter: 3000,
            });
            const updatedServices = props.data.filter((service) => service.id !== serviceObj.id);
            props.setData(updatedServices);
        }
    };

    return (
        <>
            <Button
                id={serviceObj.id}
                size="icon_small"
                variant="destructive_secondary"
                onClick={() => handleDelete(serviceObj)}
            >
                <DeleteIcon title="Delete" />
            </Button>
        </>
    )
}