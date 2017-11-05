import _ from 'lodash';

const delay = 300;
let allChecklists = [
    {
        id: 1,
        title: 'Title 1',
        items: [{
            id: '1',
            name: 'test',
            value: 'testando',
            label: 'Test'
        },
        {
            id: '2',
            name: 'test2',
            value: 'testando2',
            label: 'Test2'
        },
        {
            id: '3',
            name: 'test3',
            value: 'testando3',
            label: 'Test3'
        }]
    },
    {
        id: 2,
        title: 'Title 2',
        items: [{
            id: '1',
            name: 'test',
            value: 'testando',
            label: 'Test'
        },
        {
            id: '2',
            name: 'test2',
            value: 'testando2',
            label: 'Test2'
        },
        {
            id: '3',
            name: 'test3',
            value: 'testando3',
            label: 'Test3'
        }]
    },
    {
        id: 3,
        title: 'Title 3',
        items: [{
            id: '1',
            name: 'test',
            value: 'testando',
            label: 'Test'
        },
        {
            id: '2',
            name: 'test2',
            value: 'testando2',
            label: 'Test2'
        },
        {
            id: '3',
            name: 'test3',
            value: 'testando3',
            label: 'Test3'
        }]
    }
];

export class ChecklistsApi {
    static getAllCourses() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], allChecklists));
            }, delay);
        });
    }

    static saveChecklist(checklist) {
        checklist = Object.assign({}, checklist); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (checklist.id) {
                    const existingChecklistIndex = allChecklists.findIndex(a => a.id === checklist.id);
                    allChecklists.splice(existingChecklistIndex, 1, checklist);
                }
                else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    checklist.id = _.uniqueId();
                    //checklist.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
                    allChecklists.push(checklist);
                }
                resolve(checklist);
            }, delay);
        });
    }
}