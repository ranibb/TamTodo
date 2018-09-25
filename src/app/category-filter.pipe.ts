import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';


@Pipe({
    name: 'argsFilter',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {
    transform(todos: Todo[], filter: Todo): any {
        if (!todos || !filter) {
            return todos;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return todos.filter(todo => todo.category.indexOf(filter.category) !== -1);
    }
}