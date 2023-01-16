Given the above API it is quite possible to define queries that do not logically make sense, say if a field is set to both be ignored and to be set to an expression if the record already exists. To minimize potential errors, the following rules apply:

* If a field is set to an expression(), that takes priority over updateFields().
* If values are specified in updateFields(), only those fields will be altered if the record already exists. Fields not specified in updateFields() will not be affected.

Note that it may still be possible to define queries that do not make sense. It is up to the developer to ensure that a nonsensical query is not specified as the behavior in that case is undefined.