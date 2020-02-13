import { getBatches, getTasks, createBatch } from '../components/apiCalls';


//testing fetches in isolation
describe('getBatches', ()  =>{
    let mockRespone = [
        {
            id: 1,
            name: "Kimmychi",
            start_date: "",
            description: "yumyy yyummy woops i spelled that wrong"
        }
    ];
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
      });

    it("should call fetch with the correct url", () => {
        getBatches()

    expect(window.fetch).toHaveBeenCalledWith('/batches', {"method": "GET"});
    })

    it('should return an array of batches (HAPPY)', () => {
        getBatches()
           .then(results => expect(results).toEqual(mockResponse));
         });

    // it('should return an error (SAD)', () => {
    //
    // });


});


describe('getTasks', ()  =>{
    let mockRespone = [
        {
            title: "stuff",
            due: "4949",
            description: "explain doing stuff"
        }
    ];
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
          });
        });
      });

    it("should call fetch with the correct url", () => {
        getTasks()

    expect(window.fetch).toHaveBeenCalledWith('/tasks', {"method": "GET"});
    })

    it('should return an array of batches (HAPPY)', () => {
        getBatches()
           .then(results => expect(results).toEqual(mockResponse));
         });

    // it('should return an error (SAD)', () => {
    //
    // });

});


//testing our create fetch
describe('createBatch', ()  =>{
    let mockBatch = [
        {
            id: 1,
            name: "Kimmychi",
            start_date: "",
            description: "yumyy yyummy woops i spelled that wrong",
            tasks: ["ya", "ya", "ya"]
        }
    ];
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockBatch)
          });
        });
      });

      it('should fetch with the correct arguments', () => {
      const expected = [ '/batches/', {
        method: 'POST',
        body: JSON.stringify(mockBatch),
        headers: {
          'Content-Type': 'application/json'
        }
      }]
      createBatch(mockBatch);

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });
});
