import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';


describe('common/components/confirmation-dialog.hook specs', () => {

  it('Should show one item to delete when calling onOpenDiag', () => {

    //Arrange
    const newItemToDelete: Lookup = {
      id: '1',
      name: 'Item TEST-1'
    };

    //Act
    const {result} = renderHook(() => useConfirmationDialog())
    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    })

    //Assert
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
    expect(result.current.isOpen).toBeTruthy();

  });

  it('should delete the item passed when calling onAcept', () => {

   //Arrange

   const newItemToDelete: Lookup = {
    id: '2',
    name: 'Item TEST-2'
    };

    const emptyItem: Lookup = {
      id: '',
      name: ''
    };

    //Act
    const {result} = renderHook(() => useConfirmationDialog())

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
      result.current.onAccept();
    })

    //Assert
    expect(result.current.itemToDelete).toEqual(emptyItem);
    expect(result.current.onAccept).toEqual(expect.any(Function));
  });

  it('Should change to false on close the Confirmation Dialog', () => {

     //Arrange

   const newItemToDelete: Lookup = {
    id: '3',
    name: 'Item TEST-3'
    };

    //Act
    const {result} = renderHook(() => useConfirmationDialog())

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
      result.current.onClose();
    })

    //Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.onClose).toEqual(expect.any(Function));

  });

});
