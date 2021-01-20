import React from 'react';
import { useToaster, Toaster } from '@twilio-paste/core/toast';
import { Button } from '@twilio-paste/core/button';
import { DeleteIcon } from '@twilio-paste/icons/cjs/DeleteIcon';


export default function DeleteButton(props) {

    const toaster = useToaster();

    const serviceObj = props.service

    const handleDelete = (serviceObj) => {
        if (props.severity === 'low') {
            toaster.push({
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
            <Toaster {...toaster} />
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