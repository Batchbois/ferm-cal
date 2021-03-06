
export const getBatches = () => {
    return fetch('/batches',
        {method: "GET"}
    )
}

export const getTasks = () => {
    return fetch('/tasks',
        {method: "GET"}
    )
}

export const createBatch = (batch)=> {
     return fetch('/batches/' , {
        body: JSON.stringify(batch),
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST"
      })
 }

export const updateBatch = (batch)=> {
    return fetch('/batches/' + batch.id, {
        method: "PUT",
        headers: {
                'Content-Type': 'application/json',
        },
        body: JSON.stringify(batch),
        })
}


    //reload i think thats done and add react router redirect
export const deleteBatch = (batch) => {
    return fetch('/batches/' + batch.id, {
        body: JSON.stringify(batch),
        headers: {
            'Content-Type': 'batch/json'
        },
        method: "DELETE"
    })

}

export const markTaskDone = (task) => {
    task.completed = true
    return fetch(`/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
}

export const markBatchDone = (batch) => {
    batch.completed = true
    return fetch(`/batches/${batch.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(batch)
    })
}