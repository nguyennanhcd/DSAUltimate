# Backtracking Blueprint

## What is Backtracking?

Backtracking is a systematic way to iterate through all possible configurations to solve problems like constraint satisfaction, puzzles, and combinatorial optimization. It builds solutions incrementally and abandons paths that cannot lead to a valid solution, "backtracking" to try alternative choices.

## General Formula for Backtracking Problems

1. **Define the State**: Represent the current partial solution (e.g., a path, subset, or board configuration).

2. **Base Case**: Check if the current state is a complete solution. If yes, process it (e.g., add to results or count).

3. **Iterate Choices**: For each possible choice at the current step:

   - **Check Validity**: Ensure the choice is valid given the current state and constraints.
   - **Make Choice**: Add the choice to the state.
   - **Recurse**: Call the backtracking function with the updated state.
   - **Backtrack**: Remove the choice (undo) to try the next option.

4. **Termination**: When all choices are exhausted, return.

## Pseudocode Template

```
function backtrack(current_state):
    if is_solution(current_state):
        process_solution(current_state)
        return

    for each possible_choice in get_choices(current_state):
        if is_valid(choice, current_state):
            add_choice_to_state(current_state, choice)
            backtrack(updated_state)
            remove_choice_from_state(current_state, choice)
```

## Key Concepts

- **Pruning**: Use constraints to avoid exploring invalid paths early.
- **State Representation**: Use lists, sets, or custom objects to track progress.
- **Efficiency**: Backtracking can be exponential; optimize with heuristics or memoization where possible.

## Common Backtracking Problems

- Generating permutations
- Finding subsets or combinations
- Solving N-Queens, Sudoku, or maze problems
- String matching with wildcards

## Example: Generating Subsets

```python
def subsets(nums):
    result = []
    def backtrack(start, path):
        result.append(path[:])  # Add current subset
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return result
```

Use this blueprint to approach any backtracking problem by adapting the state, choices, and validity checks.
