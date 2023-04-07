import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';


describe('pods/project/project.mapper specs', () => {

  it('should return empty project when it feeds null', () => {

  // Arrange
    const emptyProject: apiModel.Project = null;

  // Act
    const result: apiModel.Project = mapProjectFromApiToVm(emptyProject);

  // Assert
    expect(result).toEqual({
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    });

  })

  it ('should work correctly when it feed a employeed from Api', () => {

    // Arrange
    const employeSummaryFromApi: apiModel.EmployeeSummary =
    {
      id: '1',
      employeeName: 'Laura Díaz',
      isAssigned: true,
    }

    // Act

    const result: viewModel.EmployeeSummary = employeSummaryFromApi;


    // Assert
    expect(result).toEqual(employeSummaryFromApi);
    expect(result.isAssigned).toBeTruthy();

  });

  it ('should work correctly when it feed a project from Api', () => {

    // Arrange
    const projectFromApi: apiModel.Project =
    {
      id: '1',
      name: 'Nombre Proyecto',
      isActive: true,
      comments: 'Comentarios',
      externalId: '9999',
      employees: [{
        id: '1',
        employeeName: 'Laura Díaz',
        isAssigned: true,
      }]
    }

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(projectFromApi);

    // Assert
    expect(result).toEqual(projectFromApi);
    expect(Array.isArray(result.employees)).toBeTruthy();

  });

});
