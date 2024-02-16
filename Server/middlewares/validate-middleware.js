const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      return next();
    } catch (err) {
    //   const status = 422;
    //   const message = "Fill the input properly";
    //   const extraDetails = err.issues.map((curElem) => curElem.message);
  
    //   const error = {
    //     status,
    //     message,
    //     extraDetails,
    //   };
  
    //   next(extraDetails);
    const message =err.errors[0].message;
    console.log(err);
    res.status(400).json({msg:message});
    }
  };
  
  module.exports = validate;