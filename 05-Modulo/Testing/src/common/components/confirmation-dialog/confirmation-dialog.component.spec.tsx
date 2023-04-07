import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/components/confirmation-dialog.component specs', () => {

  it('should render a dialog view with a title when props are received', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept:jest.fn(),
      onClose: jest.fn(),
      title: 'Eliminar Proyecto',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      children: '',
    }

    // Act
    const element = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(element.getByRole('heading', { level: 2 })).not.toBeNull();
    expect(element.getByRole('heading', { level: 2 })).toBeInTheDocument();

  })

})
